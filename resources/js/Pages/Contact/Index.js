import Authenticated from "@/Layouts/Authenticated"
import { Link } from "@inertiajs/inertia-react"
import { Inertia } from '@inertiajs/inertia'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Pagination from '@/Components/Pagination'
import DeleteModal from "@/Components/DeleteModal"
import { useEffect, useState } from "react"
import { usePrevious } from 'react-use'
import pickBy from 'lodash/pickBy'

export default function Index(props) {
  const { data , links } = props.contacts
  
  const [search, setSearch] = useState({q: ''})
  const prevValues = usePrevious(search)

  const [isOpen, setOpen] = useState(false)
  const [contact, setContact] = useState(null)

  const handleDelete = () => {
    if(contact !== null) {
      Inertia.delete(route('contacts.destroy', contact.id))
    }
    setOpen(false)
    setContact(null)
  }

  const handleButtonDelete = (contact) => {
    setOpen(true)
    setContact(contact)
  }

  const handleSearch = (e) => {
    setSearch(search => ({
      ...search,
      q: e.target.value
    }))
  }

  useEffect(() => {
    if (prevValues) {
        const query = Object.keys(pickBy(search)).length
            ? pickBy(search)
            : { remember: 'forget' }
        Inertia.get(route(route().current()), query, {
            replace: true,
            preserveState: true,
        })
    }
  }, [search])
  console.log(prevValues === true)
  console.log(search)

  return (
      <Authenticated breadcrumbs={[{ name: 'Contacts', link: '#' }]}>
          <DeleteModal
              isOpen={isOpen}
              handleDelete={handleDelete}
              setOpen={setOpen}
          />
          <div className="py-4">
              <div className="flex justify-between">
                  <div className="form-control">
                      <div className="relative">
                          <input
                              type="text"
                              placeholder="Search"
                              className="w-full pr-16 input input-primary input-bordered"
                              value={search.q}
                              onChange={handleSearch}
                          />
                          <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">
                              <FontAwesomeIcon icon="search" />
                          </button>
                      </div>
                  </div>
                  <Link
                      href={route('contacts.create')}
                      className="btn btn-primary"
                  >
                      Create Contact
                  </Link>
              </div>

              <div className="py-2">
                  <table className="table w-full">
                      <thead>
                          <tr>
                              <th></th>
                              <th>Name</th>
                              <th>Phone</th>
                              <th></th>
                          </tr>
                      </thead>
                      <tbody>
                          {data.map((contact) => (
                              <tr className="hover" key={contact.id}>
                                  <th>{contact.id}</th>
                                  <td>{contact.name}</td>
                                  <td>{contact.phone}</td>
                                  <td className="text-center">
                                      <div className="dropdown dropdown-end">
                                          <FontAwesomeIcon
                                              tabIndex="0"
                                              icon="ellipsis-v"
                                          />
                                          <ul
                                              tabIndex="0"
                                              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                                          >
                                              <li>
                                                  <Link
                                                      href={route(
                                                          'contacts.edit',
                                                          { id: contact.id }
                                                      )}
                                                  >
                                                      Edit
                                                  </Link>
                                              </li>
                                              <li>
                                                  <a
                                                      href="#"
                                                      onClick={() =>
                                                          handleButtonDelete(
                                                              contact
                                                          )
                                                      }
                                                  >
                                                      Hapus
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
              <Pagination links={links} />
          </div>
      </Authenticated>
  )
}