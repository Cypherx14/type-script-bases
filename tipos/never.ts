(() => {

    const error = (message: string): (never|number) => {

        if (false) {
            throw new Error('Error en la función abc' + message);

        }

        return 1;
    }


    error('Auxilio');
})();