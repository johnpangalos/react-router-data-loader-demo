type ClassName = string | undefined | null;

export function classNames(...classes: ClassName[]) {
  return classes.filter(Boolean).join(' ')
}
