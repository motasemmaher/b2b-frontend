export interface Contact{
  _id: string,
  ownerId: string,
  contacts: Contacts[]
}

interface Contacts{
  name: string,
  id: string
}