import * as React from 'react'
import { getCategories } from '../../controllers/AdminModuleController'
import {
  Grid, Paper, CardHeader, CardContent, TextField, FormControl,
  InputLabel, Select, MenuItem, Table, TableBody, TableCell, TableRow,
  Button
} from '@material-ui/core'
import { colorMapping } from '../../colors'
import { Redirect } from 'react-router-dom'
import { updateCategories } from '../../controllers/AdminModuleController'

class CategoryForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
      category1Id: -1,
      category2Id: -1,
      category3Id: -1,
      category4Id: -1,
      category1Name: "",
      category2Name: "",
      category3Name: "",
      category4Name: "",
      category1Color: "",
      category2Color: "",
      category3Color: "",
      category4Color: "",
      allDifferent: true,
      redirect: false
    }

    this.mapCategories = this.mapCategories.bind(this)
    this.findCategory = this.findCategory.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.checkAllDifferent = this.checkAllDifferent.bind(this)
    this.submit = this.submit.bind(this)
  }

  async componentDidMount() {
    const data = await getCategories()
    this.setState({
      categories: data,
      category1Id: data[0].id,
      category2Id: data[1].id,
      category3Id: data[2].id,
      category4Id: data[3].id,
      category1Name: data[0].name,
      category2Name: data[1].name,
      category3Name: data[2].name,
      category4Name: data[3].name,
      category1Color: data[0].color.toUpperCase(),
      category2Color: data[1].color.toUpperCase(),
      category3Color: data[2].color.toUpperCase(),
      category4Color: data[3].color.toUpperCase()
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.category1Color !== prevState.category1Color ||
        this.state.category2Color !== prevState.category2Color ||
        this.state.category3Color !== prevState.category3Color ||
        this.state.category4Color !== prevState.category4Color
    ) {
      this.checkAllDifferent()
    }
  }

  checkAllDifferent() {
    const {
      category1Color, category2Color, category3Color, category4Color
    } = this.state

    if (category1Color === category2Color || category1Color === category3Color
        || category1Color === category4Color || category2Color === category3Color
        || category2Color === category4Color || category3Color === category4Color
    ) {
      this.setState({
        allDifferent: false
      })
    }
    else {
      this.setState({
        allDifferent: true
      })
    }
  }

  findCategory(category) {
    return Object.keys(colorMapping).find(c => colorMapping[c].toUpperCase() === category)
  }

  handleTextChange(e) {
    const id = e.target.id.replace('category-name-', '')
    const text = e.target.value

    switch(id) {
      case '1': {
        this.setState({
          category1Name: text
        })
        break
      }
      case '2': {
        this.setState({
          category2Name: text
        })
        break
      }
      case '3': {
        this.setState({
          category3Name: text
        })
        break
      }
      case '4': {
        this.setState({
          category4Name: text
        })
        break
      }
      default:
        break
    }
  }

  handleColorChange(e) {
    const id = e.target.name.replace('color-select-', '')
    const value = e.target.value

    switch(id) {
      case '1': {
        this.setState({
          category1Color: colorMapping[value]
        })
        break
      }
      case '2': {
        this.setState({
          category2Color: colorMapping[value]
        })
        break
      }
      case '3': {
        this.setState({
          category3Color: colorMapping[value]
        })
        break
      }
      case '4': {
        this.setState({
          category4Color: colorMapping[value]
        })
        break
      }
      default:
        break
    }
  }

  mapCategories(category, index) {
    const {
      category1Name, category2Name, category3Name, category4Name,
      category1Color, category2Color, category3Color, category4Color
    } = this.state
    const tempCategories = [category1Name, category2Name, category3Name, category4Name]
    const tempColors = [category1Color, category2Color, category3Color, category4Color]

    return (
      <TableRow key={index}>
        <TableCell>
          <TextField
            id={`category-name-${index + 1}`}
            margin="normal"
            value={tempCategories[index]}
            label={`Category ${index + 1} Name`}
            variant="outlined"
            fullWidth
            required
            onChange={this.handleTextChange}
          />
        </TableCell>
        <TableCell>
        <FormControl>
          <InputLabel htmlFor={`color-select-${index + 1}`}>
            {`Category ${index + 1} Color`}
          </InputLabel>
          <Select
            id={`color-select-${index + 1}`}
            name={`color-select-${index + 1}`}
            value={this.findCategory(tempColors[index].toUpperCase())}
            label={`Category ${index + 1} Color`}
            style={{'minWidth': '20vw'}}
            onChange={this.handleColorChange}
            className="color-select"
          >
            <MenuItem value="Red">Red</MenuItem>
            <MenuItem value="White">White</MenuItem>
            <MenuItem value="Blue">Blue</MenuItem>
            <MenuItem value="Green">Green</MenuItem>
          </Select>
        </FormControl>
        </TableCell>
      </TableRow>
    )
  }

  submit() {
    const {
      category1Id, category2Id, category3Id, category4Id,
      category1Name, category2Name, category3Name, category4Name,
      category1Color, category2Color, category3Color, category4Color
    } = this.state

    const body = [
      {id: category1Id, name: category1Name, color: category1Color},
      {id: category2Id, name: category2Name, color: category2Color},
      {id: category3Id, name: category3Name, color: category3Color},
      {id: category4Id, name: category4Name, color: category4Color}
    ]
    updateCategories(body)

    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/admin" />
      )
    }

    return (
      <Grid item xs={11} style={{'marginBottom': '10px'}}>
        <Paper>
          <CardHeader title="Manage Categories" />
          <CardContent>
            <Table>
              <TableBody>
                {this.state.categories.map(this.mapCategories)}
              </TableBody>
            </Table>
            <Button
              color="primary"
              variant="contained"
              onClick={this.submit}
              style={{'marginTop': '10px'}}
              disabled={!this.state.allDifferent}
            >
              Save
            </Button>
          </CardContent>
        </Paper>
      </Grid>
    )
  }
}

export default CategoryForm
