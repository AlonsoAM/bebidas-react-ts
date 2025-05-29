import type {StateCreator} from 'zustand';

type Notification = {
  text: string
  error: boolean
  show: boolean
}

export type NotificationSliceType = {
  notification: Notification
  showNotification: (text: string, error: boolean) => void
}


export const createNotificationSlice: StateCreator<NotificationSliceType> = () => ({
  notification: {
    text: '',
    error: false,
    show: false,
  },
  showNotification: (text, error) => {
    console.log(text, error)
  }
})