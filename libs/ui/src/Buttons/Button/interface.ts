export interface IButtonProps {
  variant?: `filled` | `outlined` | `secondary-outlined`;
  rounded?: `xs` | `sm`;
  startAdornment?: any;
  endAdornment?: any;
  isLoading?: boolean;
  disabled?: boolean;
}
