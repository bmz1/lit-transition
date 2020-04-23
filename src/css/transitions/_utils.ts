import {
  html
} from 'lit-html';

import {
  CSSTransitionOptions,
  TransitionMode
} from '../base';
/**
 * takes an object and normalizes it into CSSTransitionOptions
 * by padding it with defaults etc..
 */
export function CSSTransition(opts : any = {}): CSSTransitionOptions {
  const {
    css,
    enter={},
    leave={},
    mode = TransitionMode.InOut,
    onEnter,
    onLeave
  } = opts;

  return {
    css: html`<style>${css}</style>`,
    enter: enter != false ? {
      active: 'enter-active',
      from: 'enter-from',
      to: 'enter-to',
      ...enter
    } : false,
    leave: leave != false ? {
      active: 'leave-active',
      from: 'leave-from',
      to: 'leave-to',
      lock: mode === TransitionMode.InOut,
      ...leave
    } : false,
    onEnter,
    onLeave,
    mode
  }
}