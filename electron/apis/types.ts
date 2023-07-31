type MainMessage = {
    maxWindow: () => void,
    quitWindow: () => void,
    minWindow: () => void,
    add: (a: number, b: number) => number
}

type RendererMessage = object


export type {
  MainMessage,
  RendererMessage
};