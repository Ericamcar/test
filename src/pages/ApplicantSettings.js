import React, { useState } from 'react';
import '../components/Form.css';

const ApplicantSettings = () => {
  const [lockSubmitted, setLockSubmitted] = useState(true);
  const [multipleSubmissions, setMultipleSubmissions] = useState();
  const [confirmationText, setConfirmationText] = useState(
    'Thank you for applying!'
  );
  const [redirectUrl, setRedirectUrl] = useState('');
  const [logoutUrl, setLogoutUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <h1 className='primary-heading'>
        2021 Example Organization Scholarship Program
      </h1>

      <form className='form' onSubmit={handleSubmit}>
        <h2 className='secondary-heading'>Applicant Settings</h2>
        <div className='form-control'>
          <input
            id='lock-submitted'
            type='checkbox'
            checked={lockSubmitted}
            onChange={(e) =>
              setLockSubmitted((lockSubmitted) => !lockSubmitted)
            }
          />
          <label className='form-label' htmlFor='lock-submitted'>
            Lock submitted
          </label>
          <p className='form-description'>
            By default, applicants are able to access and update their
            applications up until the program decline. Selecting this option
            will lock that access to edit upon successful submission.
          </p>
        </div>

        <div className='form-control'>
          <input
            id='multiple-submissions'
            type='checkbox'
            checked={multipleSubmissions}
            onChange={(e) =>
              setMultipleSubmissions(
                (multipleSubmissions) => !multipleSubmissions
              )
            }
          />

          <label htmlFor='multiple-submissions'>
            Allow multiple submissions per user
          </label>

          <p className='form-description'>
            By default, applicants are only allowed to apply once per program,
            per cycle. Selecting this option will allow the same user to submit
            multiple applications in a single program and cycle.
          </p>
        </div>

        <hr />

        <h3 className='tertiary-heading'>Submission & Logout</h3>

        <div className='form-control'>
          <label htmlFor='confirmation-text'>Confirmation Page Text</label>
          <textarea
            id='confirmation-text'
            rows='5'
            value={confirmationText}
            onChange={(e) => setConfirmationText(e.target.value)}
            required
          ></textarea>
        </div>

        <div className='form-control'>
          <label htmlFor='redirect-url'>
            Redirect URL (leave blank to ignore)
          </label>
          <input
            id='redirect-url'
            type='text'
            value={redirectUrl}
            onChange={(e) => setRedirectUrl(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='logout-url'>Logout URL (leave blank to ignore)</label>
          <input
            id='logout-url'
            type='text'
            value={logoutUrl}
            onChange={(e) => setLogoutUrl(e.target.value)}
          />
        </div>

        <button className='btn' type='submit'>
          Apply Changes
        </button>
      </form>
    </main>
  );
};

export default ApplicantSettings;
