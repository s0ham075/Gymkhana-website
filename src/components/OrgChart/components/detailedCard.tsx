import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { MdClose } from "react-icons/md";
import { Button } from "@/components/ui/button"

export default function DetailedCard(props) {
  return (
    <div className="absolute bg-transparent top-0 w-full h-[100vh] flex items-center justify-center ">
    <Card className="w-full max-w-md relative bg-muted">
      <div className="absolute z-20 right-0 top-0 rounded-full p-[0.2em] m-2 flex">
        <button className="text-[#000000ae]" onClick={props.handleClose}>
          <MdClose size={20}/>
        </button>
      </div>
      <div className="relative h-32 overflow-hidden rounded-t-lg">
        <img
          src="/placeholder.svg"
          alt="Organization Header"
          className="h-full w-full object-cover"
          width="512"
          height="128"
          style={{ aspectRatio: "512/128", objectFit: "cover" }}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-background p-1">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>OC</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <CardContent className="space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Acme Inc.</h3>
          <p className="text-muted-foreground">
            Acme Inc. is a leading provider of innovative solutions for businesses of all sizes. Our team of experts is
            dedicated to delivering exceptional results.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-medium">Our Team</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">CEO</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Jane Smith</p>
                <p className="text-xs text-muted-foreground">CTO</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Michael Johnson</p>
                <p className="text-xs text-muted-foreground">COO</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>ES</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Emily Sato</p>
                <p className="text-xs text-muted-foreground">CFO</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted py-4">
        <Button variant="outline" className="w-full rounded-[8px] bg-blue-500">
          View Profile
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}
