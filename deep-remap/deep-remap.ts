// Allows to show real type on hover instead of how typescript interpretes it

export type DeepRemap<T> = T extends object
  ? {
      [K in keyof T]: DeepRemap<T[K]>;
    }
  : T;

type Subtitles = {
  active: boolean;
  color: string;
};

type Settings = {
  mode: "lights" | "dark";
  playbackSpeed: number;
  subtitles: Subtitles;
};

type SettingsRemaped = DeepRemap<Settings>;
