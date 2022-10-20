const K = ['configurable', 'writable', 'enumerable'];

export function describe({
  configurable = true,
  writable = true,
  enumerable = true,
}: Partial<PropertyDescriptor> = {}): PropertyDecorator &
  ((a: { configurable?: boolean; writable?: boolean; enumerable?: boolean }) => PropertyDecorator) {
  return ((target: any, key: string) => {
    const keys = Object.keys(target);

    if (keys.length && keys.reduce((f, k) => f && K.includes(k), true)) {
      return describe({ configurable, writable, enumerable, ...target });
    }
    const desc = Object.getOwnPropertyDescriptor(target, key) || {};

    Object.defineProperty(target, key, {
      configurable: true,
      set(value: any) {
        Object.defineProperty(this, key, {
          ...desc,
          configurable,
          writable,
          enumerable,
          value,
        });
      },
    });
    return target;
  }) as PropertyDecorator &
    ((a: {
      configurable?: boolean;
      writable?: boolean;
      enumerable?: boolean;
    }) => PropertyDecorator);
}

export function forceInit<T extends Object, V>(
  factory: (t: T) => V,
  { writable = true, configurable = true, enumerable = true }: Partial<PropertyDescriptor> = {}
) {
  return ((target: T, key: any) => {
    const desc = Object.getOwnPropertyDescriptor(target, key) || {};

    if (typeof configurable !== 'undefined') desc.configurable = configurable;
    if (typeof writable !== 'undefined') desc.writable = writable;
    if (typeof enumerable !== 'undefined') desc.enumerable = enumerable;
    Object.defineProperty(target, key, {
      configurable: true,
      get() {
        Object.defineProperty(this, key, {
          ...desc,
          value: factory(this),
        });
        return this[key];
      },
    });
    return target;
  }) as unknown as PropertyDecorator;
}

export const hidden = describe({ enumerable: false });

export const readonly = describe({ writable: false });

export const visible = describe({ enumerable: true });
