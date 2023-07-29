const httpErrors = (res, err) => {
    console.log(err);
    return res.status(500).send({msg: 'Algo no está bien :( Error del servidor', error:err.message});
}

export {httpErrors}