import* as React from 'react'
import CSVReader from 'react-csv-reader'
import Nav from '../../components/Nav'
import Breadcrumbs from '../../components/Breadcrumbs'
import {
  Grid, Paper, CardHeader, CardContent, Button, Table, TableBody,
  TableRow, TableCell
} from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { uploadQuestionFile } from '../../controllers/AdminModuleController'

const ImportQuestions = () => {
  const [redirect, setRedirect] = React.useState(false)
  const [fileData, setFileData] = React.useState(undefined)

  function submit() {
    uploadQuestionFile(fileData)
    setRedirect(true)
  }

  function handleFile(data, fileInfo) {
    let filtered = data.filter(d => d.question !== '')
    setFileData(filtered)
  }

  if (redirect) {
    return <Redirect to="/admin" />
  }
  else {
    return (
      <React.Fragment>
        <Nav />
        <Breadcrumbs
          links={[
            {to: '/', name: 'Home'},
            {to: '/admin', name: 'Administration Module'}
          ]}
          currentPage="Import a Question File"
        />
        <Grid container justify="center" style={{'marginTop': '20px'}}>
          <Paper style={{'width': '80%'}}>
            <CardHeader title="Import a Question File" />
            <CardContent>
              Upload a CSV file with the following columns (Note that the columns must have headers):
              <Table
                size="small"
                style={{
                  'width': '25%',
                  'marginBottom': '20px',
                  'marginLeft': '20px'
                }}
              >
                <TableBody>
                  <TableRow>
                    <TableCell>question</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>correct_answer</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>incorrect_answer1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>incorrect_answer2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>incorrect_answer3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>category_id</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <CSVReader
                onFileLoaded={handleFile}
                parserOptions={{ header: true }}
              />
              <Button
                disabled={!fileData}
                color="primary"
                variant="contained"
                onClick={submit}
                style={{'marginTop': '20px'}}
              >
                Save
              </Button>
            </CardContent>
          </Paper>
        </Grid>
      </React.Fragment>
    )
  }
}

export default ImportQuestions
