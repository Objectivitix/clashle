import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Welcome to Clashle!" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the Clash Royale card in 5 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the correct card name.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="N" />
        <Cell value="D" />
        <Cell value="I" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter B is in the name and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="R" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="O"
          status="present"
        />
        <Cell value="W" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter O is in the name but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" />
        <Cell value="H" />
        <Cell value="E" />
        <Cell isRevealing={true} isCompleted={true} value="L" status="absent" />
        <Cell value="O" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is a Clash Royale version of the word guessing game we all know and
        love, and it is open source -{' '}
        <a
          href="https://github.com/Objectivitix/Objectivitix.github.io"
          className="underline font-bold"
        >
          check out the code here!
        </a>{' '}
      </p>
    </BaseModal>
  )
}
