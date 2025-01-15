function Profile() {
  return (
    <div className="main py-5 w-50 m-auto">
      <h1 className="h1 text-white">Edit Profile</h1>
      <hr className="border border-secondary my-4" />
      <div className="d-md-flex pb-4">
        <img
          src="public\avatar.png"
          width="120em"
          height="120em"
        />
        <div className="w-100 ms-md-4">
          <input
            type="text"
            className="w-100 bg-secondary text-white py-2"
            placeholder="Epicoder #1"
          />
          <h4 className="text-secondary fs-5 mt-4">Language:</h4>
          <button
            className="bg-black p-1 px-2 text-white dropdown-toggle border"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            English &nbsp
          </button>
          <hr className="border border-secondary my-4" />
          <h4 className="text-secondary fs-5">Maturity Settings:</h4>
          <button className="bg-dark fs-6 fw-bold text-white p-1">
            ALL MATURITY SETTING
          </button>
          <p className="text-white my-2">
            Show files for all maturity settings for this profile.
          </p>
          <button
            className="bg-black p-1 px-4 text-secondary border border-secondary"
            type="button"
          >
            EDIT
          </button>
          <hr className="border border-secondary my-4" />
          <h4 className="text-secondary fs-5">Autoplay Controls:</h4>
          <p className="text-white">
            <input type="checkbox" className="checkbox" /> Autoplay next
            episode in a series on all devices
          </p>
          <p className="text-white">
            <input type="checkbox" className="checkbox" /> Autoplay
            previews while browsing on all devices
          </p>
          <hr className="border border-secondary my-4" />
          <button
            className="bg-white p-1 px-4 text-black fw-bold border border-secondary ms-1 mb-1"
            type="button"
          >
            SAVE
          </button>
          <button
            className="bg-black p-1 px-4 text-secondary border border-secondary ms-1 mb-1"
            type="button"
          >
            CANCEL
          </button>
          <button
            className="bg-black p-1 px-4 text-secondary border border-secondary ms-1 mb-1"
            type="button"
          >
            DELETE PROFILE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
