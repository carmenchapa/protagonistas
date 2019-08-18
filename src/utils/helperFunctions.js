export function capitalizeFirst(value: string) {
	const newValue = value.toLowerCase()
  return newValue.charAt(0).toUpperCase() + newValue.slice(1)
}