export const fans: Array<Number> = [2, 3, 6, 7, 10, 11, 14, 15];

export const playSound = (id: Number) => {
  let audio = document.getElementById(id + '') as HTMLAudioElement;
  audio.currentTime = 0;
  audio.volume = 1;
  audio.play();
  if (fans.includes(id)) audio.loop= true;
};

export const stopSound = (id: Number) => {
  let audio = document.getElementById(id + '') as HTMLAudioElement;
  audio.pause();
};