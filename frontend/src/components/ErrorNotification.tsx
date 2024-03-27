import { Alert } from '@mui/material'
export default function ErrorNotification({ errorMessage }: { errorMessage: string }) {
  return (
    <Alert severity={"error"}>{`${errorMessage}. Please try again.`}</Alert>
  )
}
