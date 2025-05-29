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
  notification: {} as Notification,
  showNotification: (text, error) => {
    console.log(text, error)
  }
})