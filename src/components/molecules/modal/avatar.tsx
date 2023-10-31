import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function AvatarComponent({ image }) {
  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
