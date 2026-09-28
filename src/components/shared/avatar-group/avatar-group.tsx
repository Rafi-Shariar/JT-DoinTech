import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarGroupCountExample() {
  return (
    <AvatarGroup className="-space-x-2">
      <Avatar className="border-0 ring-0">
        <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="border-0 ring-0">
        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="@maxleiter" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar className="border-0 ring-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
          alt="@evilrabbit"
  
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=facesng"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <AvatarGroupCount className="bg-secondary text-xs font-normal">26+</AvatarGroupCount>
    </AvatarGroup>
  )
}
