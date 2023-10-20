import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'

const HomeCard = () => {
  const { username } = useAuth()
  return (
    <div className="overflow-hidden">
      <div className="px-2 pb-6 lg:p-8 lg:pl-6 ">
        <div className="text-medium p-5 pb-7 text-base font-normal ">
          <p className="font-bold">Hi {username},</p>
          <p>Let's explore some new creations today!</p>
        </div>

        <div className="flex gap-3 overflow-x-scroll whitespace-nowrap px-2 pb-4 pt-2 text-sm font-semibold xl:overflow-hidden gap-x-5">
          <div>
            <Link to="/mydrafts">
              <Button variant="normal" size="normal" className=" text-secondary-foreground">
                Drafts
              </Button>
            </Link>
          </div>

          <div>
            <Link to="/mydiscussions">
              <Button variant="normal" size="normal" className=" text-secondary-foreground">
                Discussions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCard
