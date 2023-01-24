import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

const ReactTree = ({displayTree}) => {

  return (
    <>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      >
        <TreeItem nodeId="1000" label="Root">
          <TreeItem nodeId={displayTree[0].nodeId} label={displayTree[0].label}>
            {displayTree[0].children.map( (item) => {
                return <TreeItem nodeId={item.nodeId} label={item.label} />;
              })}
          </TreeItem>
        </TreeItem>
      </TreeView>
    </>
  );
}

export default ReactTree;