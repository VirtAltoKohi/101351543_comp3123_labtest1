const resolvedPromise = () => {
    setTimeout(() => {
        let success = {'message': 'delayed promise'}
        console.log(success);
    }, 500)
}

const rejectedPromise = () => {
    setTimeout(() => {
        try {
            throw new Error('rejected promise!');
        } catch (e) {
            console.error(e);
        }
    }, 500)
}

resolvedPromise();
rejectedPromise();