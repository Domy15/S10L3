function Settings() {
  return (
    <div className="bg-white py-5">
      <div className="w-75 m-auto">
        <h1 className="h2">Account</h1>
        <hr className="border border-secondary my-3" />
        <div className="d-md-flex">
          <div className="div">
            <h2 className="h4 text-secondary">MEMBERSHIP & BILLING</h2>
            <button type="button" className="button p-2 px-4">
              Cancel Membership
            </button>
          </div>
          <div className="div">
            <div className="mt-2">
              <div className="d-flex justify-content-between">
                <p className="text-black fw-bold">Epicoder1@gmail.com</p>
                <a href="javascript:void(0)" className="text-end">
                  Change account email
                </a>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-secondary">Password:*******</p>
                <a href="javascript:void(0)" className="text-end">
                  Change password
                </a>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-secondary">Phone: 321 044 1279</p>
                <a href="javascript:void(0)" className="text-end">
                  Change phone number
                </a>
              </div>
            </div>
            <hr className="border border-secondary my-3" />
            <div className="d-flex justify-content-between">
              <div>
                <img src="public\paypal-conto.webp" width="80em" />
                <p className="text-black fw-bold">Epicoder1@gmail.com</p>
              </div>
              <a href="javascript:void(0)">Update payment info</a>
            </div>
            <a href="javascript:void(0)" className="d-block text-end mt-2">
              Billing details
            </a>
            <a href="javascript:void(0)" className="d-block text-end mt-2">
              Redeem giftcard or promo code
            </a>
            <a href="javascript:void(0)" className="d-block text-end mt-2">
              Where to buy giftcards
            </a>
          </div>
        </div>
        <hr className="border border-secondary my-3" />
        <div className="row">
            <h2 className="col h4 text-secondary me-3">PLAN DETAILS</h2>
            <p className="col text-black fw-bold text-center">
              Standard <i className="bi bi-badge-hd"></i>
            </p>
          <a href="javascript:void(0)" className="col text-end">Change plan</a>
        </div>
        <hr className="border border-secondary my-3" />
        <div className="d-md-flex">
          <div className="div">
            <h2 className="h4 text-secondary">SETTINGS</h2>
          </div>
          <div className="ms-4 div">
            <a href="javscript:void(0)" className="d-block">
              Parent Controls
            </a>
            <a href="javscript:void(0)" className="d-block mt-3">
              Test Partecipation
            </a>
            <a href="javscript:void(0)" className="d-block mt-3">
              Manage download devices
            </a>
            <a href="javscript:void(0)" className="d-block mt-3">
              Activate a device
            </a>
            <a href="javscript:void(0)" className="d-block mt-3">
              Recent device streaming acitivity
            </a>
            <a href="javscript:void(0)" className="d-block mt-3">
              Signout all devices
            </a>
          </div>
        </div>
        <hr className="border border-secondary my-3" />
        <div className="d-md-flex">
          <h2 className="h4 text-secondary div">MY PROFILE</h2>
          <div className="ms-3 div">
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-start align-items-center">
                <img src="public/avatar.png" width="30em" height="30em" />
                <p className="text-black fw-bold ms-2">Epicoder #1</p>
              </div>
              <div>
                <a href="javascript:void(0)" className="d-block">
                  Manage profile
                </a>
                <a href="javascript:void(0)" className="d-block">
                  Add profile mail
                </a>
              </div>
            </div>
            <a href="javascript:void(0)" className="d-block mt-3">
              Language
            </a>
            <a href="javascript:void(0)" className="d-block mt-3">
              Playback settings
            </a>
            <a href="javascript:void(0)" className="d-block mt-3">
              Subtitle appearence
            </a>
            <a href="javascript:void(0)" className="d-block mt-3">
              Viewing activity
            </a>
            <a href="javascript:void(0)" className="d-block mt-3">
              Ratings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
