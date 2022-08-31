// import motion and AnimatePresence
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Modal from './components/Modal/index'

// this state will tell us if the modal is currenlty open or not, it'll have a default value of false 
function App() {
  const [modalOpen, setModalOpen] = useState(false)

  // two fucntions for close and open that will toogle the value between true and false
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  // motion - HTML element with animation props
  // motion wraps all the HTML elements for you
  return (
    <div >
      <motion.button
        // whileHover will make the element bigger when you hover over it
        whileHover={{ scale: 1.1 }}
        // whileTap will make the element smaller when tapped/clicked
        whileTap={{ scale: 0.9 }}
        className="save-button"
        // set our onClick handler to run the close function if the modal is opened
        // otherwise run the open function, this lets us toogle the state from the button
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </motion.button>

      {/* use AnimatePresence to keep our modal visible temporaily even after its been remove from the DOM */}
      <AnimatePresence
        // intial will be set to false to disable any initial animations on children that are
        // present when the component is first rendered
        initial={false}
        // Only render one component at a time
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {/* toggle the state from the modal itself, ex: the user clicks on the backdrop or from the close button within the window itself */}
        {/* if modalOpen is true then will render the modal component and it will take the props of modalOpen as well as handleClose to make it aware of the data/state in the parent app component */}
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
