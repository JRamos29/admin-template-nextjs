interface AuthInputProps {
  label: string;
  value: any;
  required?: boolean;
  shouldNotRender?: boolean;
  type?: 'text' | 'email' | 'password';
  onChange: (newValue: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return props.shouldNotRender ? null : (
    <div className={`flex flex-col`}>
      <label>{props.label}</label>
      <input
        type={props.type ?? 'text'}
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
        required={props.required}
      />
    </div>
  );
}
