import {
  InteractivityDetect,
  OutMode,
  OutModeAlt,
  MoveDirectionAlt,
  MoveDirection,
} from 'tsparticles';

type DetectsOnTypes =
  | 'canvas'
  | InteractivityDetect
  | 'parent'
  | 'window'
  | undefined;
type OutModeTypes =
  | 'none'
  | 'bounce'
  | 'destroy'
  | OutMode
  | 'bounceHorizontal'
  | 'bounceVertical'
  | 'out'
  | 'split'
  | OutModeAlt
  | undefined;

type DirectionTypes =
  | number
  | 'none'
  | MoveDirection
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'right'
  | 'top'
  | 'topLeft'
  | 'topRight'
  | MoveDirectionAlt
  | undefined;




const particlesOptions = {
  background: {
    color: {
      value: '#0d47a1',
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'canvas' as DetectsOnTypes,
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 1,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none' as DirectionTypes,
      enable: true,
      outMode: 'bounce' as OutModeTypes,
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

export default particlesOptions;
