export interface TypedDateProps {
  value?: Date;
  onChange?: (date?: Date) => void;
  format?: string;
}

export interface SegmentState {
  year: number | null;
  month: number | null;
  day: number | null;
}

export interface SegmentPosition {
  start: number;
  end: number;
}
