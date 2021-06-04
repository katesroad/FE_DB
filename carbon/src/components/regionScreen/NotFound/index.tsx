import * as React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { ErrorWrap } from 'components/common/ErrorWrap'
import './styles.scss'

const NotFound: React.FC<{ id: string | number }> = ({ id }) => {
  return (
    <div className="not-found-id">
      <ErrorWrap>
        <h2>Can't find a region with id#{id}</h2>
        <Link to="/">
          <HiOutlineArrowLeft />
          <span>Go To Home</span>
        </Link>
      </ErrorWrap>
    </div>
  )
}

export default React.memo(NotFound)
