import { getUser, signOutUser } from '../fetch-utils.js';

const signOutLink = document.getElementById('sign-out-link');

// make sure we have a user!
// > Part C:
//     - get the user (if there is one)
const user = getUser();
//     - check if there is not a user and if so do the redirect
if (!user) {
    // const base =
    //     location.pathname === '/'
    //         ? './'
    //         : '../';

    let base = null;
    if (location.pathname === '/') {
        base = './';
    } else {
        base = '../';
    }

    //       redirect code: location.replace(`/auth/?redirectUrl=${encodeURIComponent(location)}`);
    location.replace(`${base}/auth/?redirectUrl=${encodeURIComponent(location)}`);
}

// > Part B: attach event listener to signOutLink that calls signOutUser
signOutLink.addEventListener('click', signOutUser);
