const create = async (user) => {
    try {
        let response = await fetch('/api/users/', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const list = async (signal) => {
    try {
        let response = await fitch('/api/users/', {
            method: "GET",
            signal: signal
        });

        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const read = async (params, credintials, signal) => {
    try {
        let response = await fetch('/api/users/' + params.userId, {
            method: "GET",
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${credintials.t}`
            }
        });

        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const update = async (params, credintials, user) => {
    try {
        let response = await fetch('/api/users/' + params.userId, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${credintials.t}`
            },
            body: JSON.stringify(user)
        });

        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

const remove = async (params, credintials) => {
    try {
        let response = await fetch('/api/users/' + params.userId, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${credintials.t}`
            }
        });

        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

export {
    create,
    list,
    read,
    update,
    remove
}
