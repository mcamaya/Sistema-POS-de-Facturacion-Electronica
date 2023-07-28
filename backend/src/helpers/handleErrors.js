const httpErrors = (res, err) => {
    console.log(err);
    res.status(400).send({msg: 'Algo no está bien :(', error:err.message});
}

export {httpErrors}