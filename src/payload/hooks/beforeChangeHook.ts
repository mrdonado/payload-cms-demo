const beforeChangeHook = async ({ data }: { data: any }): Promise<any> => {
  if (data.status === 'pending') {
    // Notify approvers or log the pending status
    console.log(`Post "${data.title}" is pending approval.`)
  }
  if (data.status === 'approved') {
    // Log approval or notify the creator
    console.log(`Post "${data.title}" has been approved.`)
  }
  if (data.status === 'rejected') {
    // Log rejection or notify the creator
    console.log(`Post "${data.title}" has been rejected.`)
  }
  return data
}

export default beforeChangeHook
