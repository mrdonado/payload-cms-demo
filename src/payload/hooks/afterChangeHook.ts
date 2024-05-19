// hooks/afterChange.js
const afterChangeHook = async ({ doc, req }) => {
  if (doc.status === 'approved') {
    // Perform actions after approval, e.g., publish the post
    console.log(`Post "${doc.title}" is now live.`)
  }
  if (doc.status === 'rejected') {
    // Perform actions after rejection, e.g., send feedback to the author
    console.log(`Post "${doc.title}" has been rejected. Notifying the author...`)
  }
}

export default afterChangeHook
