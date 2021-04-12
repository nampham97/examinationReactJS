import React, { useEffect } from 'react'

const Alert = ({msg, type, list, stateSetAlert}) => {

  useEffect( () =>{
    const timeout = setTimeout(() => {
      stateSetAlert({show: false, msg: '', type: ''});
    }, 3000);

    return () => clearTimeout(timeout);
    //eslint-disable-next-line
  }, [list])

  return <div className='alert'>
          <div className={`alert-${type}`}>{msg}</div>
        </div>
}

export default Alert
