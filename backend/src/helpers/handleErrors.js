const httpErrors = (res, err) => {
    console.log(err);
    res.status(500);
    res.send({error: 'Algo no está bien...'});
}

export {httpErrors}