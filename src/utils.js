

export const formatDate=(dateTime)=>{
const date =new Date(dateTime*1000)
const options = {
  
  month: 'long',
  day: 'numeric',

  timezone: 'UTC',
};
return(
  date.toLocaleDateString("ru-RU", options)
)
}
