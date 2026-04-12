import React from 'react'
import { Bookmark } from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src="https://www.fineprintart.com/images/blog/amazon-logo/amazon_logo_history_5.jpg" alt="" />
          <button>Save <Bookmark /></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 Days ago</span></h3>
            <h2>Senior Software Developer</h2>
            <div className='tag'>
              <h4>Part-time </h4>
              <h4>Senior Level</h4>
            </div>
        </div>
        <div className="bottom">
          <div>
            <div>
              <h3>Salary: $120,000</h3>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default App