export type BaseFrameType = 'VALUE' | 'NEUTRAL' | 'NORM';

export type IdeologyFrameType = BaseFrameType | 'STRONG_VALUE' | 'STRONG_NORM';

export type ScopeFrameType = BaseFrameType | 'BALANCED';

// VALUE | NORM
export type FrameSide = Exclude<BaseFrameType, 'NEUTRAL'>;

export type FrameFilterType = 'all' | BaseFrameType;
