const httpErrors = (res, err) => {
    console.log(err);
    res.status(500).send({msg: 'Algo no está bien :(', error:err.message});
}

export {httpErrors}