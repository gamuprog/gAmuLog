export function logs(vars: Record<string, any>) {
  for (const key in vars) {
    console.log(`${key}:`, vars[key]);
  }
}
