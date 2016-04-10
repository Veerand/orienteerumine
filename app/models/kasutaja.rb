class Kasutaja < ActiveRecord::Base
    self.table_name = 'kasutaja'
	has_many :tulemus

end
