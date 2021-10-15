export default function DeleteModal({ isOpen, setOpen, handleDelete }) {
  const style = isOpen ? { visibility: 'visible', opacity: 100 } : {}
  return (
      <div className="modal" style={style}>
          <div className="modal-box" style={{ pointerEvents: 'auto' }}>
              <p>Delete ?</p>
              <div className="modal-action">
                  <div
                      htmlFor="my-modal-2"
                      className="btn btn-primary"
                      onClick={handleDelete}
                  >
                      Yes
                  </div>
                  <div
                      htmlFor="my-modal-2"
                      className="btn"
                      onClick={() => setOpen(false)}
                  >
                      Cancel
                  </div>
              </div>
          </div>
      </div>
  )
}