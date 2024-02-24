import { toast } from './swal'

export default function (text, msg = '') {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast({
        title: msg || text,
        icon: 'success'
      })
    })
    .catch(() => {
      toast({ text: `Oops! We couldn't copy the text this time. Maybe try again?`, type: 'error' })
    })
}
