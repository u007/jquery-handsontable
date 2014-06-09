/**
 * WalkontableRowFilter
 * @constructor
 */
function WalkontableRowFilter() {
  this.countTH = 0;
}

WalkontableRowFilter.prototype = new WalkontableAbstractFilter();

WalkontableRowFilter.prototype.readSettings = function (instance) {
  this.instace = instance;
  if (instance.cloneOverlay instanceof WalkontableDebugOverlay) {
    this.offset = 0;
  }
  else {
    this.offset = instance.wtSettings.settings.offsetRow;
  }
  this.total = instance.getSetting('totalRows');
  this.fixedCount = instance.getSetting('fixedRowsTop');
  this.countTH = instance.getSetting('columnHeaders').length;
};

WalkontableRowFilter.prototype.offsettedTH = function (n) {
  return n - this.countTH;
};

WalkontableRowFilter.prototype.visibleColHeadedColumnToSourceColumn = function (n) {
  return this.visibleToSource(this.offsettedTH(n));
};

WalkontableRowFilter.prototype.sourceColumnToVisibleColHeadedColumn = function (n) {
  return this.unOffsettedTH(this.sourceToVisible(n));
};