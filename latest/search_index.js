var documenterSearchIndex = {"docs":
[{"location":"#Documentation-for-Tabben.jl","page":"Home","title":"Documentation for Tabben.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This is a Julia package for interfacing with the Tabben benchmark for tabular data. It includes features for reading and working with the datasets and for standardized evaluation, but excludes functionality related to adding new datasets or validating dataset files (see the Python package for that functionality).","category":"page"},{"location":"","page":"Home","title":"Home","text":"You're currently looking at the docs for the Julia package. For documentation about the datasets themselves, see the Datasets portion of the Python docs.","category":"page"},{"location":"#Getting-Started","page":"Home","title":"Getting Started","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can install the latest stable version using the Julia package manager: ","category":"page"},{"location":"","page":"Home","title":"Home","text":"(env) pkg> add Tabben","category":"page"},{"location":"","page":"Home","title":"Home","text":"Everything for the data loading side revolves around the OpenTabularDataset struct. To get started, specify the \"name\" of the dataset (and other parameters if you want). Your local copy of the dataset will be stored in the usual place for artifacts in your Julia installation.","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Tabben: OpenTabularDataset\n\nds = OpenTabularDataset(\"arcene\")  # defaults to the 'train' split\ntest_ds = OpenTabularDataset(\"arcene\", :test)","category":"page"},{"location":"","page":"Home","title":"Home","text":"To list all the available datasets, there's the datasets variable:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Tabben: datasets\n\nprintln(datasets)","category":"page"}]
}
