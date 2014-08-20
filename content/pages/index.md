Title: data-microscopes
URL:
save_as: index.html

`data-microscopes` is a library for doing inference in various Bayesian
non-parametric models, such as the Dirichlet Process Mixture Model (DPMM) and
the Infinite Relational Model (IRM).

Install
-------
First, install [Anaconda](https://store.continuum.io/cshop/anaconda/). Then

    conda config --add channels distributions
    conda config --add channels datamicroscopes
    conda install microscopes-{common,kernels,mixturemodel,irm}
