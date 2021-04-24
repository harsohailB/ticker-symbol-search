interface Styles {
  background?: string;
  color?: string;
  fontFamily?: string;
}

export interface Theme {
  paper?: Styles;
  search?: {
    icon?: {
      color: string;
    };
    input?: {
      color?: string;
      placeholderColor?: string;
    };
  };
  markets?: Styles;
  selector?: Styles;
}
