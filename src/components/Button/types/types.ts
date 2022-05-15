export enum ColorEnum {
  Primary = 'primary',
  Link = 'link',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger'
}

export type Colors = `${ColorEnum}`

export enum SizeEnum {
  Small = 'small',
  Normal = 'normal',
  medium = 'medium',
  Large = 'large'
}

export type Size = `${SizeEnum}`

export type ButtonProps = {
  label: string,
  color?: Colors,
  isLight?: boolean,
  isRounded?: boolean,
  size?: Size,
  isOutlined?: boolean 
}
